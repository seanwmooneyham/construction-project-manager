package com.constructionprojectmanager.rest.tool;

import com.constructionprojectmanager.rest.RestApplicationTest;
import org.junit.Before;
import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static junit.framework.TestCase.assertTrue;
import static org.junit.Assert.assertEquals;


public class ToolControllerTest extends RestApplicationTest {

    private static final Logger logger = LoggerFactory.getLogger(ToolControllerTest.class);

    @Autowired
    private ToolRepository toolRepository;

    @Override
    @Before
    public void setUp() {
        super.setUp();
    }

    @Test
    public void getToolList() throws Exception {

        String uri = "/api/tools/list";
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.get(uri).accept(MediaType.APPLICATION_JSON_VALUE)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(200, status);
        String content = mvcResult.getResponse().getContentAsString();
        Tool[] toolList = super.mapFromJson(content, Tool[].class);
        assertTrue(toolList.length > 0);
    }

    @Test
    public void createNewTool() throws Exception {

        String uri = "/api/tools/list";
        Tool mockTool = new Tool("mockTool");

        String inputJson = super.mapToJson(mockTool);
        MvcResult mvcResult = mvc.perform(MockMvcRequestBuilders.post(uri).contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson)).andReturn();

        int status = mvcResult.getResponse().getStatus();
        assertEquals(201, status);
        String content = mvcResult.getResponse().getContentAsString();
        assertEquals("{\"id\":6,\"name\":\"mockTool\"}", content);

    }

}
