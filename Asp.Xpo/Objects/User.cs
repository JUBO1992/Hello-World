using Asp.Core.Models;
using Newtonsoft.Json;

namespace Asp.Xpo.Objects
{
    public class User : BaseObject, IUser
    {
        public User()
        {

        }

        /// <summary>
        /// 名称
        /// </summary>
        /// <returns></returns>
        [JsonProperty]
        public string Name { get; set; }

        /// <summary>
        /// 用户名
        /// </summary>
        /// <returns></returns>
        [JsonProperty]
        public string UserName { get; set; }

        /// <summary>
        /// 邮件
        /// </summary>
        /// <returns></returns>
        [JsonProperty]
        public string Email { get; set; }

        /// <summary>
        /// 密码
        /// </summary>
        /// <returns></returns>
        [JsonProperty]
        public string Password { get; set; }
        
    }
}