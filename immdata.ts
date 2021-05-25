export const immdata = {
  id: 'imm1',
  routes: [
    {
      id: 'MoldParameters',
      text: 'Werkzeug Parameter',
      icon: 'HeatStation.svg',
      componentId: 'evs-machine-controller'
    },
    {
      id: 'ProductionOverview',
      text: 'Production Overview',
      icon: 'HeatStation.svg',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'production-overview'
      }
    },
    {
      id: 'MachineProductionOverview',
      text: 'Machine Production Overview',
      icon: 'HeatStation.svg',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'machine-production-overview'
      }
    },
    {
      id: 'com.engel.cc300.hmi.imm.cycletime.MachineCycleTimeMask',
      text: 'Machine CycleTime Mask',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'com.engel.cc300.hmi.imm.cycletime.MachineCycleTimeMask',
        foo: 'bar'
      }
    },
    {
      id: 'com.engel.cc300.hmi.imm.micrograph.EMaskBase',
      text: 'EMask Base',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'com.engel.cc300.hmi.imm.micrograph.EMaskBase'
      }
    },
    {
      id: 'Overview.hmi.ProductionOverviewMask',
      text: 'Production Overview Mask',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'Overview.hmi.ProductionOverviewMask'
      }
    },
    {
      id: 'Overview.hmi.QuickSetupMask1',
      text: 'Quick Setup Mask1',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'Overview.hmi.QuickSetupMask1'
      }
    },
    {
      id: 'Parts.hmi.PartsMask',
      text: 'Parts Mask',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'Parts.hmi.PartsMask'
      }
    },
    {
      id: 'ShotCounter.hmi.EProductionMask',
      text: 'EProduction Mask',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'ShotCounter.hmi.EProductionMask'
      }
    },
    {
      id: 'system.hmi.CommonMonitoringMask1',
      text: 'Common Monitoring Mask1',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'system.hmi.CommonMonitoringMask1'
      }
    },
    {
      id: 'Host.hmi.TextMask',
      text: 'Text Mask',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'Host.hmi.TextMask'
      }
    },
    {
      id: 'Maintenance.hmi.MaintenanceStripMask',
      text: 'Maintenance Strip Mask',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'Maintenance.hmi.MaintenanceStripMask'
      }
    },
    {
      id: 'WeekTimer.hmi.StandardizedOnOffMask',
      text: 'Standardized OnOff Mask',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'WeekTimer.hmi.StandardizedOnOffMask'
      }
    },
    {
      id: 'InjectionUnit1.hmi.PrePostInjMask',
      text: 'Einspritzen',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'InjectionUnit1.hmi.PrePostInjMask'
      }
    },
    {
      id: 'InjectionUnit1.hmi.PlastInjMask',
      text: 'Dosieren',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'InjectionUnit1.hmi.PlastInjMask'
      }
    },
    {
      id: 'InjectionUnit1.hmi.PlastUnitMask',
      text: 'Plast Unit Mask',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'InjectionUnit1.hmi.PlastUnitMask'
      }
    },
    {
      id: 'InjectionUnit1.hmi.WeightWatcherMonitorMask',
      text: 'Weight Watcher Monitor Mask',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'InjectionUnit1.hmi.WeightWatcherMonitorMask'
      }
    },
    {
      id: 'InjectionUnit1.sv_VisProfileGraphicPlast',
      text: 'VisProfile Graphic Plast',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'InjectionUnit1.sv_VisProfileGraphicPlast'
      }
    },
    {
      id: 'InjectionUnit1.sv_VisProfileGraphicPostInj',
      text: 'VisProfile Graphic PostInj',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'InjectionUnit1.sv_VisProfileGraphicPostInj'
      }
    },
    {
      id: 'InjectionUnit1.sv_VisProfileGraphicPreInj',
      text: 'VisProfile Graphic PreInj',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'InjectionUnit1.sv_VisProfileGraphicPreInj'
      }
    },
    {
      id: 'Nozzle1.hmi.NozzleMask',
      text: 'Düse',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'Nozzle1.hmi.NozzleMask'
      }
    },
    {
      id: 'Mold1.hmi.MoldMask',
      text: 'Form',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'Mold1.hmi.MoldMask'
      }
    },
    {
      id: 'Mold1.sv_VisProfileGraphicClAuto',
      text: 'VisProfile Graphic Cl Auto',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'Mold1.sv_VisProfileGraphicClAuto'
      }
    },
    {
      id: 'Mold1.sv_VisProfileGraphicClmpPrBld',
      text: 'VisProfile Graphic ClmpPrBld',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'Mold1.sv_VisProfileGraphicClmpPrBld'
      }
    },
    {
      id: 'Mold1.sv_VisProfileGraphicOpAuto',
      text: 'VisProfile Graphic Op Auto',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'Mold1.sv_VisProfileGraphicOpAuto'
      }
    },
    {
      id: 'MoldChange.hmi.MoldChangeEquipmentMask',
      text: 'Mold Change Equipment Mask',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'MoldChange.hmi.MoldChangeEquipmentMask'
      }
    },
    {
      id: 'MoldChange.hmi.MoldChangeMask',
      text: 'Mold Change Mask',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'MoldChange.hmi.MoldChangeMask'
      }
    },
    {
      id: 'MoldHeight1.hmi.MoldHeightMask',
      text: 'Formhöhe',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'MoldHeight1.hmi.MoldHeightMask'
      }
    },
    {
      id: 'CentralLubrication1.hmi.CentralLubricationMask',
      text: 'Central Lubrication Mask',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'CentralLubrication1.hmi.CentralLubricationMask'
      }
    },
    {
      id: 'Ejector1.hmi.EjectorMask',
      text: 'Auswerfer',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'Ejector1.hmi.EjectorMask'
      }
    },
    {
      id: 'Ejector1.sv_VisProfileGraphicEjeB',
      text: 'VisProfile Graphic EjeB',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'Ejector1.sv_VisProfileGraphicEjeB'
      }
    },
    {
      id: 'Ejector1.sv_VisProfileGraphicEjeF',
      text: 'VisProfile Graphic EjeF',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'Ejector1.sv_VisProfileGraphicEjeF'
      }
    },
    {
      id: 'EMRobotInterface1.hmi.EMRobotInterfaceMask',
      text: 'EMRobot Interface Mask',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'EMRobotInterface1.hmi.EMRobotInterfaceMask'
      }
    },
    {
      id: 'IntegratedRobotInterface1.hmi.IntegratedRobotInterfaceMask',
      text: 'Integrated Robot Interface Mask',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'IntegratedRobotInterface1.hmi.IntegratedRobotInterfaceMask'
      }
    },
    {
      id: 'ProgramSignal1.hmi.ProgramSignalInput1Mask',
      text: 'Program Signal Input Mask',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'ProgramSignal1.hmi.ProgramSignalInput1Mask'
      }
    },
    {
      id: 'ProgramSignal1.hmi.ProgramSignalOutput1Mask',
      text: 'Program Signal Output1 Mask',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'ProgramSignal1.hmi.ProgramSignalOutput1Mask'
      }
    },
    {
      id: 'SafetyGate.hmi.SafetyGateMask',
      text: 'Safety Gate Mask',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'SafetyGate.hmi.SafetyGateMask'
      }
    },
    {
      id: 'com.engel.cc300.hmi.imm.calibration.EInCalibMask',
      text: 'EInCalib Mask',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'com.engel.cc300.hmi.imm.calibration.EInCalibMask'
      }
    },
    {
      id: 'EnergyMeasurement.hmi.EnergyMeasurementMask',
      text: 'Energy Measurement Mask',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'EnergyMeasurement.hmi.EnergyMeasurementMask'
      }
    },
    {
      id: 'InjectionUnit1.hmi.PVControlMask',
      text: 'PVControl Mask',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'InjectionUnit1.hmi.PVControlMask'
      }
    },
    {
      id: 'Servo.hmi.ServoDriveMask',
      text: 'Servo Drive Mask',
      componentId: 'evs-model-based-view',
      parameters: {
        view: 'Servo.hmi.ServoDriveMask'
      }
    }
  ],
  childGroups: [
    {
      id: 'VIEW_GLOBAL',
      childGroups: [
        {
          id: 'TASK_AllProductionRelevant',
          text: 'Produktion',
          icon: 'Production.svg',
          links: [
            {
              id: 'InjectionUnit1.hmi.PrePostInjMask',
              text: 'link text'
            },
            {
              id: 'InjectionUnit1.hmi.PlastInjMask',
              icon: 'alternative-icon.png'
            },
            {
              id: 'InjectionUnit1.hmi.PlastUnitMask'
              // unknownProp: 'foo-bar'  --> will fail the vaidation
            },
            {
              id: 'InjectionUnit1.hmi.WeightWatcherMonitorMask'
            },
            {
              id: 'Nozzle1.hmi.NozzleMask'
            },
            {
              id: 'MoldParameters'
            },
            {
              id: 'ProductionOverview'
            },
            {
              id: 'MachineProductionOverview'
            },
            {
              id: 'Mold1.hmi.MoldMask'
            },
            {
              id: 'MoldChange.hmi.MoldChangeEquipmentMask'
            },
            {
              id: 'MoldChange.hmi.MoldChangeMask'
            },
            {
              id: 'MoldHeight1.hmi.MoldHeightMask'
            },
            {
              id: 'CentralLubrication1.hmi.CentralLubricationMask'
            },
            {
              id: 'Ejector1.hmi.EjectorMask'
            },
            {
              id: 'EMRobotInterface1.hmi.EMRobotInterfaceMask'
            },
            {
              id: 'IntegratedRobotInterface1.hmi.IntegratedRobotInterfaceMask'
            },
            {
              id: 'ProgramSignal1.hmi.ProgramSignalInput1Mask'
            },
            {
              id: 'ProgramSignal1.hmi.ProgramSignalOutput1Mask'
            },
            {
              id: 'SafetyGate.hmi.SafetyGateMask'
            }
          ]
        },
        {
          id: 'Task_System',
          text: 'System',
          icon: 'Settings.svg',
          links: [
            {
              id: 'com.engel.cc300.hmi.imm.calibration.EInCalibMask'
            },
            {
              id: 'EnergyMeasurement.hmi.EnergyMeasurementMask'
            },
            {
              id: 'InjectionUnit1.hmi.PVControlMask'
            },
            {
              id: 'Servo.hmi.ServoDriveMask'
            }
          ]
        }
      ]
    },
    {
      id: 'VIEW_EngelFunctions',
      text: 'Komponenten',
      childGroups: [
        {
          id: 'FUNCTION_Office',
          text: 'Office',
          icon: 'Office.svg',
          links: [
            {
              id: 'com.engel.cc300.hmi.imm.cycletime.MachineCycleTimeMask'
            },
            {
              id: 'com.engel.cc300.hmi.imm.micrograph.EMaskBase'
            },
            {
              id: 'Overview.hmi.ProductionOverviewMask'
            },
            {
              id: 'Overview.hmi.QuickSetupMask1'
            },
            {
              id: 'Parts.hmi.PartsMask'
            },
            {
              id: 'ShotCounter.hmi.EProductionMask'
            },
            {
              id: 'system.hmi.CommonMonitoringMask1'
            },
            {
              id: 'Host.hmi.TextMask'
            },
            {
              id: 'Maintenance.hmi.MaintenanceStripMask'
            },
            {
              id: 'WeekTimer.hmi.StandardizedOnOffMask'
            }
          ]
        },
        {
          id: 'FUNCTION_InjectionUnit',
          text: 'Spritzeinheit',
          icon: 'InjectionUnit.svg',
          links: [
            {
              id: 'InjectionUnit1.hmi.PrePostInjMask'
            },
            {
              id: 'InjectionUnit1.hmi.PlastInjMask'
            },
            {
              id: 'InjectionUnit1.hmi.PlastUnitMask'
            },
            {
              id: 'InjectionUnit1.hmi.WeightWatcherMonitorMask'
            },
            {
              id: 'InjectionUnit1.sv_VisProfileGraphicPlast'
            },
            {
              id: 'InjectionUnit1.sv_VisProfileGraphicPostInj'
            },
            {
              id: 'InjectionUnit1.sv_VisProfileGraphicPreInj'
            },
            {
              id: 'Nozzle1.hmi.NozzleMask'
            }
          ]
        },
        {
          id: 'FUNCTION_Mold',
          text: 'Werkzeugbereich',
          icon: 'InjectionMold.svg',
          links: [
            {
              id: 'MoldParameters'
            },
            {
              id: 'ProductionOverview'
            },
            {
              id: 'MachineProductionOverview'
            },
            {
              id: 'Mold1.hmi.MoldMask'
            },
            {
              id: 'Mold1.sv_VisProfileGraphicClAuto'
            },
            {
              id: 'Mold1.sv_VisProfileGraphicClmpPrBld'
            },
            {
              id: 'Mold1.sv_VisProfileGraphicOpAuto'
            },
            {
              id: 'MoldChange.hmi.MoldChangeEquipmentMask'
            },
            {
              id: 'MoldChange.hmi.MoldChangeMask'
            },
            {
              id: 'MoldHeight1.hmi.MoldHeightMask'
            },
            {
              id: 'CentralLubrication1.hmi.CentralLubricationMask'
            }
          ]
        },
        {
          id: 'FUNCTION_Demolding',
          text: 'Entformung',
          icon: 'Unmolding.svg',
          links: [
            {
              id: 'Ejector1.hmi.EjectorMask'
            },
            {
              id: 'Ejector1.sv_VisProfileGraphicEjeB'
            },
            {
              id: 'Ejector1.sv_VisProfileGraphicEjeF'
            },
            {
              id: 'EMRobotInterface1.hmi.EMRobotInterfaceMask'
            },
            {
              id: 'IntegratedRobotInterface1.hmi.IntegratedRobotInterfaceMask'
            }
          ]
        },
        {
          id: 'FUNCTION_Peripherie',
          text: 'Peripherie',
          icon: 'Peripherie.svg',
          links: [
            {
              id: 'ProgramSignal1.hmi.ProgramSignalInput1Mask'
            },
            {
              id: 'ProgramSignal1.hmi.ProgramSignalOutput1Mask'
            },
            {
              id: 'SafetyGate.hmi.SafetyGateMask'
            }
          ]
        }
      ]
    },
    {
      id: 'VIEW_EngelTasks',
      text: 'Aufgaben',
      childGroups: [
        {
          id: 'TASK_MoldChange',
          text: 'Umrüsten',
          icon: 'MoldSwap.svg',
          links: [
            {
              id: 'Mold1.hmi.MoldMask'
            },
            {
              id: 'MoldHeight1.hmi.MoldHeightMask'
            },
            {
              id: 'Ejector1.hmi.EjectorMask'
            }
          ]
        },
        {
          id: 'TASK_ProductionPreparation',
          text: 'Produktion vorbereiten',
          icon: 'Machine.svg',
          links: [
            {
              id: 'ProgramSignal1.hmi.ProgramSignalInput1Mask'
            },
            {
              id: 'ProgramSignal1.hmi.ProgramSignalOutput1Mask'
            }
          ]
        },
        {
          id: 'TASK_InitSampling',
          text: 'Erstbemusterung',
          icon: 'InitialSampling.svg',
          links: [
            {
              id: 'com.engel.cc300.hmi.imm.cycletime.MachineCycleTimeMask'
            },
            {
              id: 'Mold1.hmi.MoldMask'
            },
            {
              id: 'MoldHeight1.hmi.MoldHeightMask'
            },
            {
              id: 'Ejector1.hmi.EjectorMask'
            },
            {
              id: 'InjectionUnit1.hmi.PrePostInjMask'
            },
            {
              id: 'InjectionUnit1.hmi.PlastInjMask'
            },
            {
              id: 'Nozzle1.hmi.NozzleMask'
            }
          ]
        },
        {
          id: 'TASK_ProductionStartStop',
          text: 'Produktion starten/stoppen',
          icon: 'OnOff.svg',
          links: [
            {
              id: 'ShotCounter.hmi.EProductionMask'
            },
            {
              id: 'InjectionUnit1.hmi.PrePostInjMask'
            },
            {
              id: 'InjectionUnit1.hmi.PlastInjMask'
            },
            {
              id: 'Nozzle1.hmi.NozzleMask'
            },
            {
              id: 'system.hmi.CommonMonitoringMask1'
            }
          ]
        },
        {
          id: 'TASK_ProcessOptimizing',
          text: 'Produktion optimieren',
          icon: 'Optimize.svg',
          links: [
            {
              id: 'com.engel.cc300.hmi.imm.cycletime.MachineCycleTimeMask'
            },
            {
              id: 'Mold1.hmi.MoldMask'
            },
            {
              id: 'MoldHeight1.hmi.MoldHeightMask'
            },
            {
              id: 'Ejector1.hmi.EjectorMask'
            },
            {
              id: 'InjectionUnit1.hmi.PrePostInjMask'
            },
            {
              id: 'InjectionUnit1.hmi.PlastInjMask'
            },
            {
              id: 'InjectionUnit1.hmi.WeightWatcherMonitorMask'
            },
            {
              id: 'EMRobotInterface1.hmi.EMRobotInterfaceMask'
            }
          ]
        },
        {
          id: 'TASK_ProductionControl',
          text: 'Produktion kontrollieren',
          icon: 'CheckList.svg',
          links: [
            {
              id: 'com.engel.cc300.hmi.imm.cycletime.MachineCycleTimeMask'
            },
            {
              id: 'ShotCounter.hmi.EProductionMask'
            },
            {
              id: 'Overview.hmi.ProductionOverviewMask'
            },
            {
              id: 'InjectionUnit1.hmi.WeightWatcherMonitorMask'
            }
          ]
        },
        {
          id: 'TASK_Maintenance',
          text: 'Wartung',
          icon: 'Maintenance.svg'
        },
        {
          id: 'TASK_SearchError',
          text: 'Fehlersuche',
          icon: 'Error.svg'
        }
      ]
    }
  ]
};
