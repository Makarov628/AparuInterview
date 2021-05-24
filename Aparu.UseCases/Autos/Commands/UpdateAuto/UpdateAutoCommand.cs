using System;
using Aparu.UseCases.Autos.Dtos;
using MediatR;

namespace Aparu.UseCases.Autos.Commands.UpdateAuto
{
    public class UpdateAutoCommand: IRequest
    {
        public int Id;
        public ChangeAuto Dto;
    }
}