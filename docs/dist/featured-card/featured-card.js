(function(dust){dust.register("featured-card",body_0);function body_0(chk,ctx){return chk.w("<article><div class=\"featured-card\">").h("ne",ctx,{"else":body_1,"block":body_2},{"key":ctx.get(["primarySyndicatePosition"], false),"value":""},"h").w("</div></article>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<a href=\"").h("link",ctx,{},{"article":ctx.getPath(true, []),"channel":ctx.getPath(false, ["params","channel"])},"h").w("/\" class=\"featured-card__link\">").p("partials/featured-image",ctx,ctx,{}).w("\n</a><div class=\"featured-card__info\">").p("partials/title",ctx,ctx,{"titleUrls":ctx.get(["urls"], false)}).w("\n").p("partials/grid-item-syndicate-time",ctx,ctx,{"channel":ctx.getPath(false, ["params","channel"])}).w("\n</div>");}body_1.__dustBody=!0;function body_2(chk,ctx){return chk.w("<a href=\"").h("primarySyndicate",ctx,{},{"urls":ctx.get(["urls"], false),"channel":ctx.getPath(false, ["params","channel"])},"h").w("\" class=\"featured-card__link\">").p("partials/featured-image",ctx,ctx,{}).w("\n</a><div class=\"featured-card__info\">").p("partials/title",ctx,ctx,{"titleUrls":ctx.get(["urls"], false)}).w("\n").p("partials/grid-item-syndicate-time",ctx,ctx,{}).w("\n</div>");}body_2.__dustBody=!0;return body_0}(dust));