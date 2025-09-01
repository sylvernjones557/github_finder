 /*
Client ID
Ov23lihdu0B3rnGh7Js1
 */

/*

*/

class Git
{
    constructor(){
        this.clientId = "Ov23lihdu0B3rnGh7Js1";
    }

    async get(user)
    {
        const response = await fetch(`https://api.github.com/users/${user}`);
        const response_data = await response.json();
        return response_data;
    }
}