using System;
using MediatR;

namespace Aparu.UseCases.Drivers.Commands.DeleteDriver
{
    public class DeleteDriverCommand: IRequest
    {
        public int Id;
    }
}