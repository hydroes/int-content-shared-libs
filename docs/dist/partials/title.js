(function(dust){dust.register("title",body_0);function body_0(chk,ctx){return chk.w("    ").s(ctx.get(["_layout"], false),ctx,{"block":body_1},{});}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.h("eq",ctx,{"block":body_2},{"key":ctx.get(["type"], false),"value":"title"},"h");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<p><a href=\"").h("primarySyndicate",ctx,{},{"urls":ctx.get(["urls"], false),"channel":ctx.getPath(false, ["params","channel"])},"h").w("\">").f(ctx.get(["content"], false),ctx,"h").w("</a></p>");}body_2.__dustBody=!0;return body_0}(dust));