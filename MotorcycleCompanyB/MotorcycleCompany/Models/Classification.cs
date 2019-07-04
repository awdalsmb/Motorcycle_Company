using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace MotorcycleCompany.Models
{
    public enum Classification
    {
        [EnumMember(Value = "Supersport")]
        Supersport,
        [EnumMember(Value = "Cross")]
        Cross,
        [EnumMember(Value = "Custom")]
        Custom

    }
}