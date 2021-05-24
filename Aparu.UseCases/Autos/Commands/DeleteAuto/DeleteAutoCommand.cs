using System;
using MediatR;

namespace Aparu.UseCases.Autos.Commands.DeleteAuto
{
    public class DeleteAutoCommand: IRequest
    {
        public int Id;
    }
}