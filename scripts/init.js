import { skillChallenge } from './scripts.js'

// Set up socket listener to listen for gm_skillset macro
Hooks.once('ready', () => {
  console.log('PF2e RSC | hooked in')
  game.socket.on('module.pf2e-rsc-fork', (data) => {
    console.log('rsc-fork')
    if (data.operation === 'playerSkillChallenge') {
      console.log(
        'challenge recieved. permisision:' +
          data.actor.permission[game.user.id],
      )
      if (data.actor.permission[game.user.id] >= 3) {
        skillChallenge(
          data.neededSuccesses,
          data.DC,
          data.actor,
          data.mod,
          data.skillLabel,
          data.abort,
          data.tokenID,
        )
      }
    }
  })
})
