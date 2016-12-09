module.exports = function(message,config) {
    const AWS = require('aws-sdk');
    AWS.config.update({region: config.AWS.region});
    let ses = new AWS.SES();

      var params = {
      Destination: { /* required */
        BccAddresses: [],
        CcAddresses: [],
        ToAddresses: [
          config.email.receiver
        ]
      },
      Message: { /* required */
        Body: { /* required */
          Html: {
            Data: '<p>' + message.body + '</p>' + '\n' + 'Please reply to: <a href="mailto:' + message.email + '">'
                  + message.email + '</a>'
          },
          Text: {
            Data: message.body + '\n' + 'Please reply to: <a href="mailto:' + message.email + '">'
                  + message.email + '</a>.'
          }
        },
        Subject: { /* required */
          Data: message.title, /* required */
          Charset: 'UTF-8'
        }
      },
      Source: config.email.sender, /* required */
      ReplyToAddresses: [
        message.email
      ],
      ReturnPath: config.email.sender,
      ReturnPathArn: config.AWS.ARN,
      SourceArn: config.AWS.ARN
    };

      ses.sendEmail(params, function(err, data) {
        if (err) {
          console.log(err.stack);
          return false;
        }
        else {
          console.log(data);
          return true;
        }
      });

};
