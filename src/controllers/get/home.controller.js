const getHome = (request, response) => {
    response.status(200);
    response.send("<h1>Get /home</h1>");
};

export default getHome;