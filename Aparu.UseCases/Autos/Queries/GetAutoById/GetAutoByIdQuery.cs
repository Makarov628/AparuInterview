using System;
using Aparu.UseCases.Drivers.Dtos;
using Aparu.Entities;

using MediatR;

namespace Aparu.UseCases.Autos.Queries.GetAutoById
{
    public class GetAutoByIdQuery: IRequest<Auto>
    {
        public int Id;
    }
}