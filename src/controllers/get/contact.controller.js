const getContact = (request, response) => {
    response.status(200);
    response.send("<h1>Get /contact</h1>");
};

export default getContact;