(function(dust){dust.register("syndicate-time",body_0);function body_0(chk,ctx){return chk.w("  ").h("ne",ctx,{"else":body_1,"block":body_6},{"key":ctx.getPath(false, ["data","primarySyndicatePosition"]),"value":""},"h");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<p class=\"syndicate__time\"><a href=\"/").f(ctx.getPath(false, ["data","syndicateUrls"]),ctx,"h").w("/\" class=\"brand-color\">").f(ctx.getPath(false, ["data","categories","0","name"]),ctx,"h").w("</a>|").x(ctx.getPath(false, ["data","lastModifiedAt"]),ctx,{"else":body_2,"block":body_4},{}).w("</p>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.h("relativeTimeUTC",ctx,{},{"timestamp":body_3},"h");}body_2.__dustBody=!0;function body_3(chk,ctx){return chk.f(ctx.getPath(false, ["data","publicationDate"]),ctx,"h");}body_3.__dustBody=!0;function body_4(chk,ctx){return chk.h("relativeTimeUTC",ctx,{},{"timestamp":body_5},"h");}body_4.__dustBody=!0;function body_5(chk,ctx){return chk.f(ctx.getPath(false, ["data","lastModifiedAt"]),ctx,"h");}body_5.__dustBody=!0;function body_6(chk,ctx){return chk.w("<p class=\"syndicate__time\"><a href=\"").h("syndicateCategoryLink",ctx,{},{"article":ctx.get(["data"], false),"channel":ctx.getPath(false, ["settings","channel"])},"h").w("\" class=\"brand-color\">").h("syndicateCategory",ctx,{},{"article":ctx.get(["data"], false),"channel":ctx.getPath(false, ["settings","channel"]),"displayField":"name"},"h").w("</a>|").x(ctx.getPath(false, ["data","lastModifiedAt"]),ctx,{"else":body_7,"block":body_9},{}).w("</p>");}body_6.__dustBody=!0;function body_7(chk,ctx){return chk.h("relativeTimeUTC",ctx,{},{"timestamp":body_8},"h");}body_7.__dustBody=!0;function body_8(chk,ctx){return chk.f(ctx.getPath(false, ["data","publicationDate"]),ctx,"h");}body_8.__dustBody=!0;function body_9(chk,ctx){return chk.h("relativeTimeUTC",ctx,{},{"timestamp":body_10},"h");}body_9.__dustBody=!0;function body_10(chk,ctx){return chk.f(ctx.getPath(false, ["data","lastModifiedAt"]),ctx,"h");}body_10.__dustBody=!0;return body_0}(dust));