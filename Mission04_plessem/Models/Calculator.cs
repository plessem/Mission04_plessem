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
        public int Assign { get; set; }

        [Required]
        public int Grouppro { get; set; }

        [Required]
        public int Quiz { get; set; }

        [Required]
        public int Midterm { get; set; }

        [Required]
        public int Final { get; set; }

        [Required]
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
