package com.viastore.service;

import com.viastore.service.dto.mail.Feedback;
import org.apache.velocity.app.VelocityEngine;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Service;
import org.springframework.ui.velocity.VelocityEngineUtils;

import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

/**
 * Created by GSmirnoff on 26.05.14.
 */
@Service
public class MailService {

    @Autowired
    private JavaMailSender mailSender;
    @Autowired
    private VelocityEngine velocityEngine;

    private static final String FEEDBACK_MAIL = "gregsm1988@gmail.com";
    private static final String ENCODING = "UTF-8";

    public void send(final Feedback feedback) {
        MimeMessagePreparator preparator = new MimeMessagePreparator() {

            public void prepare(MimeMessage mimeMessage) throws Exception {

                MimeMessageHelper message = new MimeMessageHelper(mimeMessage, true, ENCODING);
                message.setTo(FEEDBACK_MAIL);
                message.setFrom("viastore.feedback@gmail.com");
                message.setSubject("Viastore feedback");

                String body = VelocityEngineUtils.mergeTemplateIntoString(
                        velocityEngine, "templates/feedback.vm", ENCODING, feedback.toMap());
                message.setText(body, true);

            }
        };
        mailSender.send(preparator);
    }

}
