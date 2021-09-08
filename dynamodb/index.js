const AWS = require( 'aws-sdk' );
AWS.config.setPromisesDependency( require( 'bluebird' ) );
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const config = require( '../config.json' );

/**
 * Get the customer from Dynamo DB given the Intercom conversationId
 * @param {Intercom Conversation Id} conversationId 
 */
async function saveItem ( conversationId ) {
    
    const getItem = await dynamoDb.get( {
        TableName: config.DYNAMODB_TABLE,
        Key: {
            conversationId: conversationId,
        },
    } ).promise();
    return getItem.Item || null;
}
