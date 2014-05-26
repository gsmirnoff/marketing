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

    private static final String FEEDBACK_MAIL = "viastore@firstlinesoftware.ru";

    public void send(final Feedback feedback) {
        MimeMessagePreparator preparator = new MimeMessagePreparator() {

            public void prepare(MimeMessage mimeMessage) throws Exception {

                MimeMessageHelper message = new MimeMessageHelper(mimeMessage, true);
                message.setTo(FEEDBACK_MAIL);
                message.setFrom("viastore.feedback@gmail.com");
                message.setSubject("Viastore feedback");

                String body = VelocityEngineUtils.mergeTemplateIntoString(
                        velocityEngine, "templates/feedback.vm", "UTF-8", feedback.toMap());
                message.setText(body, true);

            }
        };
        mailSender.send(preparator);
    }

}
