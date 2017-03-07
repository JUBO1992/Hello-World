using Asp.Core.Models;

namespace Asp.Xpo.Objects
{
    public abstract class BaseObject : IBaseObject
    {
        public BaseObject()
        {

        }

        public long Oid { get; set; }
        
    }
}