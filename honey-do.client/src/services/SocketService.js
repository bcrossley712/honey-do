import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import Pop from '../utils/Pop'
import { SocketHandler } from '../utils/SocketHandler'

class SocketService extends SocketHandler {
  constructor() {
    super()
    this
      .on('error', this.onError)
      .on('join:room', this.joinRoom)
      .on('new:note', this.newNote)
      .on('new:item', this.newItem)
      .on('edit:item', this.editItem)
      .on('new:chore', this.newChore)
      .on('edit:chore', this.editChore)
  }

  onError(e) {
    Pop.toast(e.message, 'error')
  }

  // OUT
  joinRoom(roomName = 'general') {
    this.emit('join:room', { roomName })
  }

  // IN
  newNote(payload) {
    logger.log('[newNote:socket]', payload)
    AppState.notes.unshift(payload)
  }
  newItem(payload) {
    logger.log('[newItem:socket]', payload)
    AppState.items.unshift(payload)
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

  }
}

export const socketService = new SocketService()
