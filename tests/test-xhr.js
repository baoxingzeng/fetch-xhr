import XMLHttpRequest from "xhr2";
import server from "./mock-server.js";
import { setFullOverride } from "./exports.js";
import { _test as XMLHttpRequest_suite, setXMLHttpRequestClass } from "./XMLHttpRequestTest.js";

// setFullOverride(true);
setXMLHttpRequestClass(XMLHttpRequest);
XMLHttpRequest_suite.after(() => server.close());
XMLHttpRequest_suite.run();
