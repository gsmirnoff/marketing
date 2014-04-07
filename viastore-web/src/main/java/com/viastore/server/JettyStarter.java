package com.viastore.server;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.webapp.WebAppContext;

import java.net.URL;

/**
 * Created with IntelliJ IDEA.
 * User: GSmirnoff
 * Date: 04.04.14
 * Time: 15:53
 * To change this template use File | Settings | File Templates.
 */
public class JettyStarter {

    public static void main(String[] args) throws Exception {
        Server server = new Server(3333);
        String rootPath = JettyStarter.class.getClassLoader().getResource(".").toString();
        WebAppContext context = new WebAppContext(rootPath + "../../src/main/webapp", "");
        context.setDescriptor(rootPath + "../../src/main/resources/WEB-INF/web.xml");
        server.setHandler(context);
        server.start();
        server.join();
    }

}
