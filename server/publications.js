// bounces, inbound messages, delivery events, clicks and open events publications
if (Meteor.isServer) {

  Meteor.publish('bounces', function() {
    return BouncesList.find({}, {sort: {BouncedAt: 1}});
  });

  Meteor.publish('inbound', function() {
    return InboundList.find({}, {sort: {Date: 1}});
  });

  Meteor.publish('opens', function() {
    return OpensList.find({}, {sort: {ReceivedAt: 1}});
  });

  Meteor.publish('clicks', function() {
    return ClicksList.find({}, {sort: {ReceivedAt: 1}});
  });

  Meteor.publish('deliveries', function() {
    return DeliveryList.find({}, {sort: {ReceivedAt: 1}});
  });
}
