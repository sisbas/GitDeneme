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
    using System.ComponentModel.DataAnnotations;
    public partial class Emailler
    {
        public int id { get; set; }
        [Required(ErrorMessage = "Bu alan gerekli")]
        public string eposta { get; set; }
    
        public virtual Kullanicilar Kullanicilar { get; set; }
    }
}
