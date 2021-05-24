using System;
using Aparu.UseCases.Drivers.Dtos;
using MediatR;

namespace Aparu.UseCases.Drivers.Commands.CreateDriver
{
    public class CreateDriverCommand: IRequest<int>
    {
        public ChangeDriver Dto;
    }
}