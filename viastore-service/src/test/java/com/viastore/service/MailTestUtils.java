package com.viastore.service;

import org.springframework.context.ApplicationContext;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import java.util.Map;

/**
 * Created with IntelliJ IDEA.
 * User: F_a
 * Date: 08.07.14
 * Time: 23:54
 * To change this template use File | Settings | File Templates.
 */
public class MailTestUtils {

    public static void reconfigureMailSenders(ApplicationContext applicationContext, int port) {
        Map<String, JavaMailSenderImpl> ofType =
                applicationContext.getBeansOfType(org.springframework.mail.javamail.JavaMailSenderImpl.class);

        for (Map.Entry<String, JavaMailSenderImpl> bean : ofType.entrySet()) {
            JavaMailSenderImpl mailSender = bean.getValue();
            mailSender.setHost("localhost");
            mailSender.setPort(port);
        }
    }
}
