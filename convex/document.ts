import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createDocument=mutation({
      args:{
            title:v.string(),
            parentDocument:v.string(),
      },
      handler:async(ctx,args)=>{
            const identify = await ctx.auth.getUserIdentity();
            if(!identify){
                  throw new Error("You are not logged in");
            }

            const userId= identify.subject;

            const document= await ctx.db.insert("documents", {
                  title:args.title,
                  parentDocument:args.parentDocument,
                  userId,
                  isArchived:false,
                  isPublished:false,
            })
            return document;
      }

})