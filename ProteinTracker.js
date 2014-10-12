History = new Meteor.Collection('history');


if (Meteor.isServer) {

    Meteor.publish('allHistory', function () {
        return History.find();
    });

    Meteor.startup(function () {

        if (History.find().count() === 0) {
            History.insert({
                value: 50,
                date: new Date().toTimeString()
            });
            History.insert({
                value: 30,
                date: new Date().toTimeString()
            });
            History.insert({
                value: 10,
                date: new Date().toTimeString()
            });
        }
    });
}
