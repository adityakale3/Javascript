const Student = require('./mongoSchema');
const assert = require('assert');

describe("Create Records" , () => {
    it("Create a user in DB", () => {

        //assert(true);
        const sam = new Student({name:"Sam"});
        sam.save()
                  .then(() => {
                      assert(!sam.isNew);
                  })
                  .catch((error) => {
                    console.log(error);
                  });

    });
});