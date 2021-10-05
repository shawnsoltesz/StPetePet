using System;
using System.ComponentModel.DataAnnotations;

namespace StPetePet.Models
{
    public class Listing
    {
        public int Id { get; set; }
        public bool IsActive { get; set; }

        [Required(ErrorMessage = "You must select a Listing Type.")]
        public string ListingType { get; set; }

        [Required(ErrorMessage = "You must enter a Name.")]
        public string Name { get; set; }

        [Required(ErrorMessage = "You must enter a Description.")]
        public string Description { get; set; }

        [Required(ErrorMessage = "You must enter an Address.")]
        public string Address { get; set; }

        public double Latitude { get; set; }

        public double Longitude { get; set; }

        [Required(ErrorMessage = "You must enter a Website.")]
        public string Website { get; set; }

        [Required(ErrorMessage = "You must enter a Telephone Number.")]
        public string PhoneNumber { get; set; }

        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }

        public string PhotoURL { get; set; }
    }
}