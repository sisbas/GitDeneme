//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace SmartProIK.Models.db
{
    using System;
    using System.Collections.Generic;
    
    public partial class Diller
    {
        public int id { get; set; }
        public string ad { get; set; }
        public int okuma { get; set; }
        public int yazma { get; set; }
        public int konusma { get; set; }
    
        public virtual Kullanicilar Kullanicilar { get; set; }
    }
}
