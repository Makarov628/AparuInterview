using System;
using Aparu.UseCases.Autos.Dtos;
using MediatR;

namespace Aparu.UseCases.Autos.Commands.CreateAuto
{
    public class CreateAutoCommand: IRequest<int>
    {
        public ChangeAuto Dto;
    }
}