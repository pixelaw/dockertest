/* Autogenerated file. Do not edit manually. */

import { defineComponent, Type as RecsType, World } from "@latticexyz/recs";

export function defineContractComponents(world: World) {
  return {
	  App: (() => {
	    return defineComponent(
	      world,
	      { system: RecsType.String, name: RecsType.Number, manifest: RecsType.Number, icon: RecsType.Number, action: RecsType.Number },
	      {
	        metadata: {
	          name: "App",
	          types: [],
	        },
	      }
	    );
	  })(),
	  AppName: (() => {
	    return defineComponent(
	      world,
	      { name: RecsType.Number, system: RecsType.String },
	      {
	        metadata: {
	          name: "AppName",
	          types: [],
	        },
	      }
	    );
	  })(),
	  AppUser: (() => {
	    return defineComponent(
	      world,
	      { system: RecsType.String, player: RecsType.String, action: RecsType.Number },
	      {
	        metadata: {
	          name: "AppUser",
	          types: [],
	        },
	      }
	    );
	  })(),
	  CoreActionsAddress: (() => {
	    return defineComponent(
	      world,
	      { key: RecsType.Number, value: RecsType.String },
	      {
	        metadata: {
	          name: "CoreActionsAddress",
	          types: [],
	        },
	      }
	    );
	  })(),
	  Instruction: (() => {
	    return defineComponent(
	      world,
	      { system: RecsType.String, selector: RecsType.Number, instruction: RecsType.Number },
	      {
	        metadata: {
	          name: "Instruction",
	          types: [],
	        },
	      }
	    );
	  })(),
	  Permissions: (() => {
	    return defineComponent(
	      world,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
	      { allowing_app: RecsType.String, allowed_app: RecsType.String, permission: { app: RecsType.Boolean, color: RecsType.Boolean, owner: RecsType.Boolean, text: RecsType.Boolean, timestamp: RecsType.Boolean, action: RecsType.Boolean } },
	      {
	        metadata: {
	          name: "Permissions",
	          types: ["Permission"],
	        },
	      }
	    );
	  })(),
	  Pixel: (() => {
	    return defineComponent(
	      world,
	      { x: RecsType.Number, y: RecsType.Number, created_at: RecsType.Number, updated_at: RecsType.Number, app: RecsType.String, color: RecsType.Number, owner: RecsType.String, text: RecsType.Number, timestamp: RecsType.Number, action: RecsType.Number },
	      {
	        metadata: {
	          name: "Pixel",
	          types: [],
	        },
	      }
	    );
	  })(),
	  QueueItem: (() => {
	    return defineComponent(
	      world,
	      { id: RecsType.Number, valid: RecsType.Boolean },
	      {
	        metadata: {
	          name: "QueueItem",
	          types: [],
	        },
	      }
	    );
	  })(),
  };
}
