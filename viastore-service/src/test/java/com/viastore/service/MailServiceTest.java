package com.viastore.service;

import com.viastore.service.dto.mail.Feedback;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.subethamail.wiser.Wiser;
import org.subethamail.wiser.WiserMessage;

import javax.mail.internet.MimeMessage;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.CoreMatchers.notNullValue;
import static org.hamcrest.CoreMatchers.nullValue;
import static org.hamcrest.MatcherAssert.assertThat;

/**
 * Created by GSmirnoff on 14.08.14.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath*:test-serviceContext.xml"})
public class MailServiceTest {

    @Autowired
    private MailService mailService;
    @Autowired
    private ApplicationContext applicationContext;

    private Wiser wiser;
    private static final String FROM = "viastore.feedback@gmail.com";
    private static final String TO = "viastore@firstlinesoftware.ru";

    @Before
    public void setUp() {
        wiser = new Wiser(2500);
        wiser.start();

        MailTestUtils.reconfigureMailSenders(applicationContext, 2500);
    }

    @Test
    public void testSend() throws Exception {
        Feedback feedback = new Feedback();
        feedback.setEmail("tst@tst.com");
        feedback.setMessage("test msg");
        feedback.setName("tst_user");

        mailService.send(feedback);

        assertThat(wiser.getMessages().isEmpty(), is(false));

        WiserMessage wMsg = wiser.getMessages().get(0);
        MimeMessage msg = wMsg.getMimeMessage();

        assertThat(msg.getSubject(), is("Viastore feedback"));
        assertThat(msg.getFrom()[0].toString(), is(FROM));
        assertThat(msg.getRecipients(MimeMessage.RecipientType.TO)[0].toString(), is(TO));
    }

    @After
    public void tearDown() {
        wiser.stop();
    }

}
