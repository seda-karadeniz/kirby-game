import background from "./background";

const controllers = {
    init(game){
        window.addEventListener('keydown', (e)=>{
            if (e.key === ''){
                if (!game.started){
                    game.started = true
                }

            }
        })
    }
}
export default controllers