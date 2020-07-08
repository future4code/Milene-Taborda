 **Exercício 01

 ****Tarefa 02

> const verifyExistence = input => {
  return input !== undefined && input !== null;
};

exports.handler = async event => {
  try {
    const hasBody =
      verifyExistence(event.body) &&
      Object.keys(JSON.parse(event.body)).length !== 0;

    const hasQueries = verifyExistence(event.queryStringParameters);

    if (!hasBody && !hasQueries) {
      throw new Error("Missing input!");
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        hasBody,
        hasQueries
      })
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: err.message
      })
    };
  }
};

2) Porque o body vem como uma string, logo para acessar seus elementos é preciso transformá-lo primeiro.

3) Retornará um código 200 sempre que for enviado algo por meio do body ou das queryStringParameters.

4) Sempre que o hasbody e o hasQueries vierem undefined, ou seja, é preciso que não venha nenhum parâmetro nem pelo body nem pelas queryStringParameters.

****Tarefa 03
> exports.handler = async event => {
    try {
        const CEP = JSON.parse(event.body).CEP

        if (CEP.length >= 8 && CEP.indexOf("-") !== -1) {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: true
                })
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                message: false
            })
        };
    
    }
    catch (err) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: err.message
            })
        };
    }

};

 **Exercício 04

 >Feito.
 
 **Exercício 05
 >Feito.
