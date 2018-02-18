package com.example.demo.controllers;

import com.sun.deploy.net.HttpResponse;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;

@Controller
public class MainController {

    @RequestMapping("/test")
    public String test(){
        return "index";
    }

    @RequestMapping(value = "/test", params = "startService")
    public String testWithParam(@RequestParam("startService") String isStart) {
//        System.out.println(isStart);
//        RestTemplate restTemplate = new RestTemplate();
//        HttpHeaders httpHeaders = new HttpHeaders();
//        httpHeaders.add("Content-Type", "text/html");
//        httpHeaders.add("Accept", "*/*");
//        HttpStatus httpStatus =  new HttpStatus();
//        HttpEntity<String> requestEntity = new HttpEntity<String>("", httpHeaders);
//        ResponseEntity<String> responseEntity = restTemplate.exchange("https://httpbin.org/status/200", HttpMethod.GET, requestEntity, String.class);
//        System.out.println(responseEntity.getStatusCode());
        System.out.println("чек");
        return "index";
    }


    @RequestMapping("/test2")
    public String test2(){
        System.out.println("MDKWDMAWKDAWDW");
        return "index2";
    }



    @RequestMapping("/test/test")
    public void sendReq(){
        test();
    }
}
