using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace MotorcycleCompany.Models
{
    public enum Gender
    {
        [EnumMember(Value = "Female")]
        Female,
        [EnumMember(Value = "Male")]
        Male
    }
}
