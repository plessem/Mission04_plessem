using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_plessem.Models
{
    public class Calculator
    {
        //getting and setting all the variables in the Calculator form
        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public int Assign { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public int Grouppro { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public int Quiz { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public int Midterm { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public int Final { get; set; }

        [Required]
        [Range(0, 100, ErrorMessage = "Number must be between 0 and 100")]
        public int Intex { get; set; }


        //the long way of doing the code above or to do validation!
        ////Setter
        //public void setAssign (string input)
        //{
        //    this.Assign = input;
        //}

        ////Getter
        //public string getAssign ()
        //{
        //    return this.Assign;
        //}
    }
}
