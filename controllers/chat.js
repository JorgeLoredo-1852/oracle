const cohere = require('cohere-ai');
const axios = require('axios');

exports.answerChat = async (req, res, next) => {
    //const claimingAddress = req.body.sender_address;
    //let co = new cohere.CohereClient('0qyfEOi1eN4C2xXJg62FgXoq1aQMxzJHOkXB6KOC')
    console.log(req.body)
    const response = await axios.request(
        
        {
            method: 'POST',
            url: 'https://api.cohere.ai/v1/chat',
            headers: {
              accept: 'application/json',
              'content-type': 'application/json',
              authorization: 'Bearer ikvgT3kZ65z5aN809a4SKr08BkHT75jCq9xDgEND'
            },
            data: {
              message: req.body.message,
              //model: 'string',
              //stream: false,
              //preamble_override: 'string',
              //conversation_id: 'string',
              prompt_truncation: 'AUTO',
              //connectors:[{"id": "web-search"}],
              //search_queries_only: true,
              //documents: [{id: 'string', additionalProp: 'string'}],
              chat_history: [{role: 'USER', message: 'Answer in just one sentence'}],
              max_tokens:256,
              citation_quality: 'fast',
              //temperature: 0
            }
          }

    ).then(function (response) {
        return response.data.text
    }).catch(function (error) {

    });

    //console.log(response.data)
    res.status(200).json({
      status: "success",
      results: response,
      //data: {
      //  organizations,
      //},
    });
  };