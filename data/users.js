  
const collections = require('./collections');
const users = collections.users;

module.exports = {

    //Returns the Database ID of created user OR rejected promise on error
    async create(userID) {
        if(!userID || typeof userID !== 'string') return Promise.reject('Must provice a valid userID');

        if(await this.userExists(userID)) return Promise.reject('UserID already in use');

        const userCollection = await users();
        let newUser = {
            userID: userID,
            lessonOne: false,
            lessonTwo: false,
            lessonThree: false,
            testOne: "N/A",
            testTwo: "N/A",
            testThree: "N/A"
        }

        const insertInfo = await userCollection.insertOne(newUser);
        if(insertInfo.insertedCount === 0) return Promise.reject(`Could not add user ${userID}`);

        return insertInfo.insertedId;
    },

    //Returns array of all stored user objects
    async getAllUsers(){
        const userCollection = await users();
        const arr = await userCollection.find({}).toArray();
        return arr;
    },

    //Returns True or False OR rejected promise as error
    async userExists(userID){
        if(!userID || typeof userID !== 'string') return Promise.reject('Must provice a valid userID');

        const userCollection = await users();
        const user = await userCollection.findOne({userID: userID});
        if(user === null) return false;
        return true;
    },

    //Returns NULL or user object OR rejected promise as error
    async getUser(userID){
        if(!userID || typeof userID !== 'string') return Promise.reject('Must provice a valid userID');

        const userCollection = await users();
        const user = await userCollection.findOne({userID: userID});
        if(user === null) return null;
        return user;
    },

    //Returns true/false for completion OR rejected promise as error
    async getLesson(userID, lesson){
        if(!userID || typeof userID !== 'string') return Promise.reject('Must provice a valid userID');
        if(!lesson || typeof lesson !== 'string') return Promise.reject('Must provide a lesson to get');

        const userCollection = await users();
        const user = await userCollection.findOne({userID: userID});
        if(user === null) return Promise.reject("Unable to find user");
        if(user[lesson] === undefined) return Promise.reject("This lesson does not exist");
        return user[lesson]

    },

    //Returns the lesson received as echo OR rejected promise as error
    async setLesson(userID, lesson){
        if(!userID || typeof userID !== 'string') return Promise.reject('Must provice a valid userID');
        if(!lesson || typeof lesson !== 'string') return Promise.reject('Must provide a lesson to get');

        const userCollection = await users();
        const user = await userCollection.findOne({userID: userID});

        if(user === null) return Promise.reject("Unable to find user");
        if(user[lesson] === undefined) return Promise.reject("This lesson does not exist");
        let updatedUser = {
            userID: userID,
            lessonOne: user.lessonOne,
            lessonTwo: user.lessonTwo,
            lessonThree: user.lessonThree,
            testOne: user.testOne,
            testTwo: user.testTwo,
            testThree: user.testThree
        }
        updatedUser[lesson] = true;

        const updatedInfo = await userCollection.updateOne({userID: userID}, {$set: updatedUser});
        if(updatedInfo.modifiedCount === 0) return Promise.reject('Lesson was already completed.');
        return updatedUser[lesson];

    },

    //Returns saved test score, N/A if not taken, OR rejected promise as error
    async getTest(userID, test){
        if(!userID || typeof userID !== 'string') return Promise.reject('Must provice a valid userID');
        if(!test || typeof test !== 'string') return Promise.reject('Must provide a test to get');

        const userCollection = await users();
        const user = await userCollection.findOne({userID: userID});

        if(user === null) return Promise.reject("Unable to find user");
        if(user[test] === undefined) return Promise.reject("This test does not exist");
        return user[test]
    },

    //Returns the score received as echo OR rejected promise as error
    async setTest(userID, test, score){
        if(!userID || typeof userID !== 'string') return Promise.reject('Must provice a valid userID');
        if(!test || typeof test !== 'string') return Promise.reject('Must provide a test to get');
        if(!score || typeof score !== 'string') return Promise.reject('Must provide a valid test score to save');

        const userCollection = await users();
        const user = await userCollection.findOne({userID: userID});

        if(user === null) return Promise.reject("Unable to find user");
        if(user[test] === undefined) return Promise.reject("This test does not exist");

        let updatedUser = {
            userID: userID,
            lessonOne: user.lessonOne,
            lessonTwo: user.lessonTwo,
            lessonThree: user.lessonThree,
            testOne: user.testOne,
            testTwo: user.testTwo,
            testThree: user.testThree
        }
        updatedUser[test] = score;

        const updatedInfo = await userCollection.updateOne({userID: userID}, {$set: updatedUser});
        if(updatedInfo.modifiedCount === 0) return Promise.reject('Could not update Test successfully');
        return score;
    }

}