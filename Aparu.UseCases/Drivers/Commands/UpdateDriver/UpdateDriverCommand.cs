using System;
using Aparu.UseCases.Drivers.Dtos;
using MediatR;

namespace Aparu.UseCases.Drivers.Commands.UpdateDriver
{
    public class UpdateDriverCommand: IRequest
    {
        public int Id;
        public ChangeDriver Dto;
    }
}