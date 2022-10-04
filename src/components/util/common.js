
/*...Enum values for user type or role*/
	export const getUserTypeName = (data) => {
		// console.log(data);
        if (data === 0) {
          return "admin";
        } 
        else {
          return "general";
        }
      }

/*...Enum values for data model type*/
      export const getModelTypeName = (data) => {
		// console.log(data);
        if (data === 1) {
          return "PLS";
        } 
        else {
          return "SIMCA";
        }
      }