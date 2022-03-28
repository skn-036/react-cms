export interface Contact {
  id: number
  name: string
  messages?: Message[]
}

export interface Message {
  id: number
  from: number
  content: string
  createdAt: string
}