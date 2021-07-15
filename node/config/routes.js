module.exports = app => {
    const controller = app.api
    const config = app.config

    app.route('/parameters')
        .post(controller.parameters.save)   
        .get(controller.parameters.getById)
        .get(controller.parameters.getStatus)
    app.route('/parameters/status')
        .get(controller.parameters.getStatus)
    app.route('/parameters/:id')
        .post(controller.parameters.saveById)
}