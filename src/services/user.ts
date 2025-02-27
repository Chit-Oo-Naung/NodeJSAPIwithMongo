import { Service, Inject } from 'typedi';

@Service()
export default class UserService {
  constructor(@Inject('userModel') private userModel: any, @Inject('logger') private logger: any) {}

  public async getAllUsers(): Promise<object>{
    try{
      const allRecords = await this.userModel.find({})
      const res = {
        "data" : allRecords,
      }
      return (res)
    }
    catch (e){
      this.logger.error(e);
      throw e;
    }
  }
  
  // public async deleteUser(id : string): Promise<object> {
  //   try {
  //     // const deleteid = new mongoose.Types.ObjectId(id)
  //     await this.userModel.deleteOne({_id : id})
  //     const res = {
  //       "message" : "Successfully deleted!"
  //     }
  //     return (res)
  //   } catch (e) {
  //     this.logger.error(e);
  //     throw e;
  //   }
  // }

}
