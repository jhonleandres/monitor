const si = require('systeminformation');
const { execSync  } = require("child_process");

module.exports = app =>{

// hardware
// limitMin
// limitMax
// firstAction
// secondAction
    
    const save = async (req, res) =>{
        const parameter = { ...req.body }
        
        return res.status(200).send(produto)
    }

    const saveById = async (req, res) =>{
        const parameter = { ...req.body }
        
        return res.status(200).send(produto)
    }
    const get = (req, res) => {
        app.db('parameters')
            .select()
            .then(parameters => res.json(parameters))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('parameters')
            .select()
            .where({id: req.params.parameter_id})
            .then(parameter => res.json(parameter))
            .catch(err => res.status(500).send(err))
    }

    const getStatus = async (req, res) =>{
        try {
            const os = await si.osInfo()
            const men = await si.mem()
            const used = os.platform === 'linux' ? men.active : men.used
            const menPorcentagem = parseInt(((used/men.total)*100).toFixed(0))
            const processador = await si.cpuTemperature()
            // const video = await si.graphics()
            // const vdPorcentagem = ((video.controllers[0].memoryUsed/video.controllers[0].memoryTotal)*100).toFixed(0)

            const data = { 
                menPorcentagem: menPorcentagem,
                processador: processador.main,
                // video: video,
                // video: {vv: "teste"},
                // graphic: {
                //     model: video.controllers[0].model,
                //     menPorcentagem : videoPorcentagem,
                //     utilizationGpu: video.controllers[0].utilizationGpu,
                //     fanSpeed: video.controllers[0].fanSpeed,
                //     temperatureGpu: video.controllers[0].temperatureGpu,
                //     temperatureMemory: video.controllers[0].temperatureMemory

                // }

             }
            return res.status(200).send(data)
        } catch (e) {
            return res.status(500)
        }
    }

    return {save, get, getById, saveById, getStatus}
}