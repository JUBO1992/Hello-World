using System.Collections.Generic;

namespace Asp.Core.Models
{
  /// <summary>
  /// 用户接口
  /// </summary>
  public interface IUser : IBaseObject
  {
    /// <summary>
    /// 用户名
    /// </summary>
    /// <returns>string</returns>
    string UserName { get; set; }

    /// <summary>
    /// 密码
    /// </summary>
    /// <returns>string</returns>
    string Password { get; set; }

  }
}