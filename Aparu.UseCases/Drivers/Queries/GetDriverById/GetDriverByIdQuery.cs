using System;
using Aparu.UseCases.Drivers.Dtos;
using Aparu.Entities;

using MediatR;

namespace Aparu.UseCases.Drivers.Queries.GetDriverById
{
    public class GetDriverByIdQuery: IRequest<Entities.Driver>
    {
        public int Id;
    }
}