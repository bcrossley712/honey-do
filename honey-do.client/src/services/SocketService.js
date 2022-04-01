import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import Pop from '../utils/Pop'
import { SocketHandler } from '../utils/SocketHandler'

class SocketService extends SocketHandler {
  constructor() {
    super()
    this
      .on('error', this.onError)
      .on('joined:room', this.joinedRoom)
      .on('new:note', this.newNote)
      .on('new:item', this.newItem)
      .on('edit:item', this.editItem)
      .on('new:chore', this.newChore)
      .on('edit:chore', this.editChore)
      .on('delete:chore', this.deleteChore)
  }


  // OUT
  joinRoom(roomName = 'general') {
    this.emit('join:room', { roomName })
  }

  // IN

  joinedRoom(payload) {
    logger.log('you have joined the room:', payload.roomName)
  }
  newNote(payload) {
    logger.log('[newNote:socket]', payload)
    AppState.notes.unshift(payload)
  }
  newItem(payload) {
    logger.log('[new:item]', payload)
    AppState.items.push(payload)
  }
  editItem(payload) {
    logger.log('[editItem:socket]', payload)

  }
  newChore(payload) {
    logger.log('[newChore:socket]', payload)
    AppState.chores.unshift(payload)
  }
  editChore(payload) {
    logger.log('[editChore:socket]', payload)
    let index = AppState.chores.findIndex(c => c.id == payload.id)
    AppState.chores.splice(index, 1, payload)
  }
  deleteChore(payload) {
    logger.log('[delete:chore]', payload)
    AppState.chores = AppState.chores.filter(c => c.id != payload.id)
  }
  onError(e) {
    Pop.toast(e.message, 'error')
  }
}

export const socketService = new SocketService()
