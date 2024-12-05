

interface IStorage {
    handleLoginUser: (key: string, value: object) => boolean,
    handleLogoutUser: (key: string) => boolean,
    hasLogin: (key:string) => boolean
}

export const storage: IStorage = {

    handleLoginUser: (key: string,value:object ) => {


      try {

        localStorage.setItem(key, JSON.stringify(value))

        return true
      } catch (error) {
        console.error(error)

        return false
      }
    },
     handleLogoutUser: (key: string) => {
        try {
        localStorage.removeItem(key)
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    
    },
    hasLogin:(key:string) => {

        
            const user = localStorage.getItem(key)
            if(user) return true
                
     
            return false
        
    }

        
    
}