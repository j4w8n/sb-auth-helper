export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      messages: {
        Row: {
          created_at: string
          id: number
          message: string
          status: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          message: string
          status?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          message?: string
          status?: string
          user_id?: string
        }
      }
      messages_queue: {
        Row: {
          created_at: string
          from: string
          id: number
          message: string
          message_id: number
          retries: number
          status: string
          user_id: string
        }
        Insert: {
          created_at?: string
          from: string
          id?: number
          message: string
          message_id: number
          retries?: number
          status?: string
          user_id: string
        }
        Update: {
          created_at?: string
          from?: string
          id?: number
          message?: string
          message_id?: number
          retries?: number
          status?: string
          user_id?: string
        }
      }
      profiles: {
        Row: {
          first_name: string | null
          id: string
          last_name: string | null
          username: string | null
        }
        Insert: {
          first_name?: string | null
          id: string
          last_name?: string | null
          username?: string | null
        }
        Update: {
          first_name?: string | null
          id?: string
          last_name?: string | null
          username?: string | null
        }
      }
      subscribers: {
        Row: {
          created_at: string | null
          id: number
          subscriber: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          subscriber: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: number
          subscriber?: string
          user_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      find_user: {
        Args: {
          email_input: string
        }
        Returns: {
          first_name: string | null
          id: string
          last_name: string | null
          username: string | null
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
